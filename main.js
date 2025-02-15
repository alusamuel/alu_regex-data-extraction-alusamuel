#!/usr/bin/node

// Object containing different types of strings for pattern matching
const data = {
    "HTML tags": ["<p>", '<div class="example">', '<img src="image.jpg" alt="description">'],
    "Email addresses": ["user@example.com", "firstname.lastname@company.co.uk"],
    "Credit card numbers": ["1234 5678 9012 3456", "1234-5678-9012-3456"],
    "URLs": ["https://www.example.com", "http://subdomain.example.org/pageLinks"],
    "Phone Numbers": ["(123) 456-7890", "123-456-7890", "123.456.7890"]
};

// Regular expressions for pattern matching
const regexPatterns = {
    "HTML tags": /<[^>]+>/g,
    "Email addresses": /[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?/g,
    "Credit card numbers": /\d{4}([\s-])\d{4}\1\d{4}\1\d{4}/g,
    "URLs": /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9.-]*)?/g,
    "Phone Numbers": /\(?\d{3}\)?([\s.-])\d{3}\1\d{4}/g
};

// Iterate through the object and match patterns
for (const key in data) {
    console.log(`Matched data types for ${key}:`);
    data[key].forEach(item => {
        const matched = item.match(regexPatterns[key]) || [];
        console.log(matched.length > 0 ? matched : "No match found");
    });
    console.log("--------------------------------");
}
