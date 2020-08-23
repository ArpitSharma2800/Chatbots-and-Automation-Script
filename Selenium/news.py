from selenium import webdriver
import time  
from selenium.webdriver.common.keys import Keys  
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
print("news search start started")  
driver = webdriver.Chrome('D:/SETUPS/chromedriver_win32/chromedriver.exe')  
driver.get('https://www.inshorts.com/en/read')
WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.XPATH,'/html/body/div[4]/div/div[3]/div[1]/div/div[3]/div[1]')))
time.sleep(2)
h1 = driver.find_element_by_xpath('/html/body/div[4]/div/div[3]/div[1]/div/div[3]/div[1]')
print("latest news {a}".format(a=h1.text))
time.sleep(5)
print("news search start ended")
