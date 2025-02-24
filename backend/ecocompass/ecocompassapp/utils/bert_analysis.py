import re
import pandas as pd
import PyPDF2
from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline

# Load ESG-BERT Model
tokenizer = AutoTokenizer.from_pretrained("nbroad/ESG-BERT")
model = AutoModelForSequenceClassification.from_pretrained("nbroad/ESG-BERT")

# create text classification pipeline
classifier = pipeline('text-classification', model=model, tokenizer=tokenizer)

class PDFParser:
    def __init__(self, pdf_file):
        self.pdf_file = pdf_file
        self.text = self.extract_text()

    def extract_text(self):
        text = ""
        pdf_reader = PyPDF2.PdfReader(self.pdf_file)
        for page in pdf_reader.pages:
            text += page.extract_text() or ""
        return text
    
    def get_text_clean_list(self):
        text = re.sub(r'\n', ' ', self.text)
        text = re.sub(r'\s+', ' ', text)
        sentences = text.split('.')
        return sentences

def run_classifier(pdf_file):
    pp = PDFParser(pdf_file)
    sentences = pp.get_text_clean_list()
    result = classifier(sentences)
    df = pd.DataFrame(result)
    return df

def analyze_esg(pdf_file):

    df = run_classifier(pdf_file)
    esg_analysis = df.groupby(['label']).mean().sort_values('score', ascending=False).to_dict()['score']

    esg_score = sum(esg_analysis.values()) / len(esg_analysis) * 100

    return {
        "file_name" : pdf_file.name,
        "esg_analysis" : esg_analysis,
        "esg_score" : esg_score
    }