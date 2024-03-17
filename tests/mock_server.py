import requests

# Define the URL and the float value
url = "http://localhost:3000/violation"
float_value = 3.1415

# Convert the float value to an IEEE binary representation
import struct

binary_float = struct.pack(">f", float_value)

# Send the POST request with the binary float as the request body
response = requests.post(url, data=binary_float)

# Print the response
print(response.text)
