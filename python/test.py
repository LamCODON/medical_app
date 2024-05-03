from bs4 import BeautifulSoup

url = 'https://www.vinmec.com/vi/thuoc'
response = requests.get(url)
html_content = response.text
soup = BeautifulSoup(html_content, 'html.parser')



# Lấy tên thuốc từ thẻ h1
drug_name = soup.find('div', class_='mask').find('h1').text.strip()
print(drug_name)

exit()
soup = BeautifulSoup(html_content, 'html.parser')
sections = soup.find_all('section', class_='collapsible-container')
info = ""
for section in sections:
    header = section.find('h2', class_='header')
    section_title = header.find('span').text
    info += section_title + "\n"
    body = section.find('div', class_='body')
    paragraphs = body.find_all('p')
    for paragraph in paragraphs:
        info += paragraph.text.strip() 
    info += "\n"
print(info.rstrip()) 
