import requests

document_id = "1JCFNn5yj_-flsGLzeqy6ETYGV_f5pJl2YpEKNabiLic"  # Replace with the ID of your Google Doc
export_format = "txt"  # Replace with the desired export format (e.g. "html", "txt", etc.)
api_key = "AIzaSyA0rvC9zZIA1Rp_G0NswkihEqkhK2czeL8"  # Replace with your API key

url = f"https://docs.google.com/document/d/1JCFNn5yj_-flsGLzeqy6ETYGV_f5pJl2YpEKNabiLic/export?format=txt&key=AIzaSyA0rvC9zZIA1Rp_G0NswkihEqkhK2czeL8"
response = requests.get(url)
document_contents = response.text
