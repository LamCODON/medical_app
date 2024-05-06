import requests
from bs4 import BeautifulSoup
from flask import Flask, request, jsonify, render_template, session, redirect, send_from_directory

app = Flask(__name__)

@app.route('/danhsachthuoc', methods=['GET'])
def danhsachthuoc():
    url = 'https://www.vinmec.com/vi/thuoc/?page=7'
    response = requests.get(url, proxies=None)
    html_content = response.text
    soup = BeautifulSoup(html_content, 'html.parser')

    ul_tag = soup.find('ul', class_='o-masonry o-masonry--column-3')
    result = []
    for id, li_tag in enumerate(ul_tag.find_all('li', class_='item'), start=181):
        a_tag = li_tag.find('a', class_='c-media clearfix')
        href = a_tag['href']
        title = a_tag['title']
        
        result.append({
            "id": id,
            "title": title,
            "href": "https://www.vinmec.com"+href
        })
    return jsonify(result)

@app.route('/thongtinthuoc', methods=['POST'])
def thongtinthuoc():
    data = request.json
    link = data.get('link')
    print(link)
    response = requests.get(link)
    html_content = response.text
    soup = BeautifulSoup(html_content, 'html.parser')

    drug_name = soup.find('div', class_='mask').find('h1').text.strip()

    info = ""
    sections = soup.find_all('section', class_='collapsible-container')
    for section in sections:
        header = section.find('h2', class_='header')
        section_title = header.find('span').text
        info += section_title + "\n"
        body = section.find('div', class_='body')
        paragraphs = body.find_all('p')
        for paragraph in paragraphs:
            info += paragraph.text.strip() 
        info += "\n" 

    return jsonify({'name': drug_name, 'info': info.rstrip()})


if __name__ == '__main__':
    app.run(debug=True)