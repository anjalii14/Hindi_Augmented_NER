# Image-Augmented Hindi Named Entity Recognition (IA-HiNER)

## Overview

**Image-Augmented Hindi Named Entity Recognition (IA-HiNER)** is an advanced project that enhances Named Entity Recognition (NER) for Hindi text by integrating captions generated from images. By incorporating image captions, our solution aims to improve the accuracy of entity recognition in Hindi text.

## Project Objectives

- **Dataset Generation**: Collect and pair Hindi news articles with images, then generate captions for these images.
- **Dataset Augmentation**: Enrich the dataset by integrating image captions with the existing text data.
- **NER Model Improvement**: Enhance Hindi NER performance by training models on the augmented dataset.

## Proposed Solution

### 1. Dataset Generation
- **Data Collection**:
  - Use the News API to gather Hindi news articles and corresponding images.
  - Adhere to API request limitations by strategically querying relevant data.
- **Image Captioning**:
  - Generate captions for images using a captioning model (e.g., BLIP) to provide additional context.

### 2. Data Annotation Framework
- **Manual Annotation**:
  - Develop a web-based annotation tool, **Annotify**, using React for annotating named entities in both original and augmented text. 
  - Features include intuitive UI, collaboration support, version control, and quality assurance.
- **Semi-Automated Annotation**:
  - Utilize the Hindi Named Entity Recognition model developed by IIT Bombay for semi-automated annotation.
  - The model processes sentences in batches, significantly speeding up the annotation process.
  - [IIT Bombay Hindi NER Model]([https://github.com/IIT-Bombay/hindi-ner](https://github.com/cfiltnlp/HiNER))

### 3. Model Training
- **Image Captioning**:
  - Use BLIP for generating image captions and translate them into Hindi.
  - Merge captions with annotated text to create a comprehensive dataset.
- **NER Models**:
  - Train using pre-trained multilingual models such as XLM-RoBERTa and MuRIL.
  - Fine-tune these models on the augmented dataset using transfer learning techniques.

### 4. Evaluation and Performance Metrics
- Evaluate model performance using metrics like precision, recall, and F1-score.
- Compare IA-HiNER performance with traditional NER systems using only textual data.

### 5. Iterative Improvement
- Continuously refine data collection, annotation, and model training processes based on feedback and evaluation insights.

## Methodology and Timeline

### Data Collection and Preparation
- **Data Collection**:
  - Collect Hindi news articles and images using the News API.
  - Clean and process image captions, including translation from English to Hindi where necessary.
- **Data Annotation**:
  - Use Annotify for both manual and semi-automated annotation.
  - Annotate the dataset iteratively with the Hindi NER model from IIT Bombay.

### Model Development
1. **Image Captioning**:
   - Initialize and configure BLIP for generating image captions.
   - Process and translate captions, then merge them with original text.
2. **NER Model Training**:
   - **XLM-RoBERTa**: Fine-tune on augmented data, evaluate performance.
   - **MuRIL**: Prepare dataset, perform tokenization, and train the model.

### Training and Evaluation
- Train the model with optimized hyperparameters and evaluate using precision, recall, and F1-score metrics.
- Consider techniques like dropout and data augmentation to enhance model generalizability.


