function convertMarkdown() {
    const input = document.getElementById('markdown-input').value;
    const lines = input.split('\n');
    let htmlOutput = '';

    // Helper function to process inline styles (bold, italic, images, links)
    const parseInline = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/__(.*?)__/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/_(.*?)_/g, '<em>$1</em>')
            .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    };

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // 1. Headings (must be at the beginning of the line, with inline formatting supported inside)
        if (/^#{3}\s+(.+)$/.test(line)) {
            let content = line.replace(/^#{3}\s+(.+)$/, '$1');
            line = `<h3>${parseInline(content)}</h3>`;
        } else if (/^#{2}\s+(.+)$/.test(line)) {
            let content = line.replace(/^#{2}\s+(.+)$/, '$1');
            line = `<h2>${parseInline(content)}</h2>`;
        } else if (/^#\s+(.+)$/.test(line)) {
            let content = line.replace(/^#\s+(.+)$/, '$1');
            line = `<h1>${parseInline(content)}</h1>`;
        }
        // 2. Blockquotes (must be at the beginning of the line)
        else if (/^>\s+(.+)$/.test(line)) {
            let content = line.replace(/^>\s+/, '');
            line = `<blockquote>${parseInline(content)}</blockquote>`;
        } 
        // 3. Regular lines with inline formatting
        else {
            line = parseInline(line);
        }

        htmlOutput += line;
    }

    return htmlOutput;
}

const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

if (markdownInput) {
    markdownInput.addEventListener('input', () => {
        const converted = convertMarkdown();
        htmlOutput.textContent = converted;
        preview.innerHTML = converted;
    });
}
