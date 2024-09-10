const axios = require('axios');
const fs = require('fs');
const path = require('path');

// const API_KEY = '0c74ceebecc84a35af58d88c3ba0d046';
const API_KEY ='c047480430ce46ceadcf452e7472236e';
const language = 'hi';
const pageSize = 100; // Number of articles to fetch per request
const totalNewsNeeded = 1000; // Total number of articles needed in the dataset
const fetchedArticlesFilePath = path.join(__dirname, 'fetched_articles.json');

const saveNewsToFile = (news) => {
    const fileName = 'new.txt';
    const filePath = path.join(__dirname, fileName); // Construct the file path

    let dataToSave = ''; // Initialize empty string to store data

    // Read existing fetched articles from file
    let fetchedArticles = new Set();
    if (fs.existsSync(fetchedArticlesFilePath)) {
        const fileContent = fs.readFileSync(fetchedArticlesFilePath, 'utf8');
        fetchedArticles = new Set(JSON.parse(fileContent));
    }

    // Filter out duplicates based on headline
    news = news.filter(article => !fetchedArticles.has(article.headline));

    // Append new articles to the file
    news.forEach(article => {
        dataToSave += `${article.headline}\n${article.imageUrl}\n\n`;
        fetchedArticles.add(article.headline); // Add headline to fetched articles set
    });

    fs.appendFile(filePath, dataToSave, (err) => {
        if (err) {
            console.error('Error saving news to file:', err);
        } else {
            console.log('News appended to', filePath);
        }
    });

    // Write updated fetched articles to file
    fs.writeFileSync(fetchedArticlesFilePath, JSON.stringify(Array.from(fetchedArticles)), 'utf8');
};

const fetchNews = async (keyword) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: keyword, // Example query term, replace with your desired keyword
                language: language, // Specify Hindi language if needed
                apiKey: API_KEY,
                pageSize: pageSize
            }
        });

        const news = response.data.articles.map(article => {
            return {
                headline: article.title,
                imageUrl: article.urlToImage
            };
        });

        if (news.length === 0) {
            throw new Error('No news articles found.');
        }

        // Save headlines and image URLs to file while filtering out duplicates
        saveNewsToFile(news);
    } catch (error) {
        console.error('Error fetching or saving news:', error.message);
    }
};

// Call fetchNews function with the desired keyword
const keyword = 'कोई '; // Example keyword, replace with your desired keyword
fetchNews(keyword);
