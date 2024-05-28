import time

host_path = r'C:\Windows\System32\drivers\etc\hosts'
blocked_websites = [
    '43things.com', 'tiktok.com', 'twitter.com', '4chan.org' 
]
redirect = '127.0.0.1'

file = open(host_path, 'r+')
content = file.read()

for website in blocked_websites:
    if website in content:
        pass
    else:
        file.write(redirect +" "+ website +"\n")

time.sleep(5)