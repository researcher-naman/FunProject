function generateLink() {
    const param1 = encodeURIComponent(document.getElementById('sem').value);
    const param2 = encodeURIComponent(document.getElementById('enroll').value);

    const generatedLink = `https://example.com/?param1=${param1}&param2=${param2}`;
    
    document.getElementById('generatedLink').innerText = `Generated Link: ${generatedLink}`;
    
}