#!/usr/bin/env python3

import socket

HOST = 'localhost'
PORT = 80

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((HOST, PORT))
server.listen()

print('Aguardando con de um cliente')

file = open('index.html', 'r')
output = file.read()
file.close()

while True:
    conn, addr = server.accept()
    data = conn.recv(1024).decode('UTF-8')
    
    if not data:
        print('Sem dados, fechando conn')
        conn.close()
        break
        
    conn.sendall(output.encode('UTF-8'))
    print('Cliente solicitando...')
    
    