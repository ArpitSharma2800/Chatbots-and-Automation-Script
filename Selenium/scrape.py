from selenium import webdriver
import time  
from selenium.webdriver.common.keys import Keys  
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
print("sample test case started")  
driver = webdriver.Chrome('D:/SETUPS/chromedriver_win32/chromedriver.exe')  
driver.get('https://fast.com/')
WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.XPATH,'//*[@id="your-speed-message"]')))
time.sleep(2)
h1 = driver.find_element_by_xpath('//*[@id="speed-value"]')
print("Your internet speed is {a} Mbps".format(a=h1.text))
time.sleep(5)
