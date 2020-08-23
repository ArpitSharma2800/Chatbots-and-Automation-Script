from selenium import webdriver
import time  
from selenium.webdriver.common.keys import Keys  
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
print("sample test case started")  
driver = webdriver.Chrome('D:/SETUPS/chromedriver_win32/chromedriver.exe')  
#driver=webdriver.firefox()  
#driver=webdriver.ie()  
#maximize the window size  
# driver.maximize_window()  
#navigate to the url  
driver.get("https://mail.google.com/mail/u/0/#inbox")  
#identify the Google search text box and enter the value  
WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.NAME,"identifier"))).send_keys("as9235@srmist.edu.in") 

#click on the Google search button 
driver.find_element_by_id("identifierNext").click() 
time.sleep(5)
driver.find_element_by_name("password").send_keys("Iluvmuma264674@") 
driver.find_element_by_id("passwordNext").click()
time.sleep(10)  
driver.find_element_by_xpath('//button[normalize-space()="Sign out"]').click()
#close the browser  
driver.close()  
print("sample test case successfully completed")  