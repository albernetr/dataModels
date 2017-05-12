# MotorPhysicalTest

## Description

Sensor data collected along a physical test in the scope of health. This model has been developed inspired by the [Open mHealth](http://www.openmhealth.org/).

## Examples of use

```
{  
  "id": "test-ffffffffff9cbbf4465f0ef30033c587-acc-7118",
  "type": "MotorPhysicalTest",
  "testType": "Timed Up and Go",
  "refUser": "http://207.249.127.162:1234/users/1",
  "category": "smartphone",
  "controlledProperty": "accelerometer",
  "osVersion": "Android 4.0",
  "softwareVersion": "MA-Test 1.6",
  "hardwareVersion": "GP-P9872",
  "firmwareVersion": "SM-A310F",
  "function": ["sensing"],
  "brandName": "Xioami",
  "modelName": "MI 5",
  "manufacturerName": "Samsung",
  "value": "-69.895,72.0493,4.90137,2017-01-18T20:45:43.765Z-0800 -69.844,72.0726,4.85817,2017-01-18T20:45:43.799Z-0800...",
  "configuration": {
    "data": {  
      "format": "csv"
    },
    "sensor": {  
      "sampleRate": {
        "value": "60",
        "type": "hz"
      }
    }
  },
  "dateTestStarted": "2017-01-18T20:45:58.447Z",
  "dateTestEnded": "2017-01-18T20:45:42.697Z"
}
```