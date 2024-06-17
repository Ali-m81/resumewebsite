const handelDownload = () => {
    const link = document.createElement('a');
    link.href = "../pdf/Black and White Minimalistic Simple Resume.pdf"
    link.download = "My cv"
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
}

export { handelDownload }