import serial

import numpy as np
import time

import webapp2
from paste import httpserver


connect_serial = serial.Serial('/dev/cu.usbmodem1441',115200) #getting serial data from this port

yval = []
t = 0


class HelloWebapp2(webapp2.RequestHandler):
    def get(self):
       while (connect_serial):
           i = 0
           while i <60:
             sample = connect_serial.readline()
             sample = sample.rstrip('\r\n')
             X = sample.split(' ')
             if len(X) > 0:
                 yval.append(float(X[1]))
             i = i+1
           self.response.write(yval[0:60])
           del yval[0:60]
           break
           

app = webapp2.WSGIApplication([
    ('/', HelloWebapp2),
], debug=True)

    
httpserver.serve(app, host='127.0.0.1', port='8080')
 