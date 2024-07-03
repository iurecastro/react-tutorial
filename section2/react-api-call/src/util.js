export const stripHtml = (html) => {
    let div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent;
}