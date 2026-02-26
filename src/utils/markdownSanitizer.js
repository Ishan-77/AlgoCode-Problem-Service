

// we are storing the problems in frontend as a markup, we need to convert to html and sanitize, hence this function.

const marked = require('marked');

const TurndownService = require('turndown');

const sanitizeHtmlLibrary = require('sanitize-html');


function sanitizeMarkdownContent(markdownContent) {


    const turndownService = new TurndownService();

    //1 convert markdown to html

    const convertedHtml = marked.parse(markdownContent);

    console.log("converted html",convertedHtml);



    //2 sanitize html

    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags:sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])

    });


    console.log("sanitized html",sanitizedHtml);




    //3 convert back to markdown

    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);


    console.log("sanitized markdown",sanitizedMarkdown);


    return sanitizedMarkdown;





}

module.exports = sanitizeMarkdownContent;