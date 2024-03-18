// Code generated by Arduino IoT Cloud, DO NOT EDIT.

#include <ArduinoIoTCloud.h>
#include <Arduino_ConnectionHandler.h>
#include <math.h>

const char SSID[] = SECRET_SSID;          // Network SSID (name)
const char PASS[] = SECRET_OPTIONAL_PASS; // Network password (use for WPA, or use as key for WEP)

void onThresholdChange();

float loudness = NAN; 
float threshold = NAN;
bool isVoliation;

void initProperties()
{
  ArduinoCloud.addProperty(loudness, READ, 1 * SECONDS, NULL);
  ArduinoCloud.addProperty(threshold, READWRITE, 1 * SECONDS, onThresholdChange);
  ArduinoCloud.addProperty(isVoliation, READ, ON_CHANGE, NULL);
}

WiFiConnectionHandler ArduinoIoTPreferredConnection(SSID, PASS);
