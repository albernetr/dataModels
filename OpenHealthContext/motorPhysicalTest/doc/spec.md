# PhysicalTest

## Data Model

A JSON Schema corresponding to this data model can be found [here](../schema.json).

+ `id` : Entity's unique identifier which must follow a specific format (i.e., \<DEVICE UNIQUE ID\>-\<SENSOR\>-\<TEST NUMBER\>; without blank spaces in between and using capital letters).
   + Mandatory.

+ `type` : Entity type. It must be equal to `PhysicalTest`.
   + Mandatory.

+ `testType` : Name of physical test.
   + Attribute type: `string`
   + Allowed values: (`Timed Up and Go`, `30 second sit to stand test`, `4-Stage Balance Test`).
   + Mandatory.

+ `balanceTestType` : Name of the balance test type.
   + Attribute type: `string`
   + Allowed values: (`Side by Side`, `Semi-Tandem`, `Tandem (Full)`, `Single-Leg Stance`).
   + Optional.

+ `refUser` : Reference to the actual User, sheltered by an independent service.
   + Attribute type: `string`.
   + Mandatory.

+ `category` : See attribute `category` from [DeviceModel](../../../Device/DeviceModel/doc/spec.md). 
   + Attribute type: `string`.
   + Mandatory.

+ `controlledProperty` : See attribute `controlledProperty` from [DeviceModel](../../../Device/DeviceModel/doc/spec.md). 
   + Attribute type: `string`.
   + Mandatory.

+ `osVersion` : See attribute `category` from [Device](../../../Device/Device/doc/spec.md). 
   + Mandatory.

+ `softwareVersion` : See attribute `category` from [Device](../../../Device/Device/doc/spec.md). 
   + Mandatory.

+ `hardwareVersion` : See attribute `category` from [Device](../../../Device/Device/doc/spec.md). 
   + Mandatory.

+ `firmwareVersion` : See attribute `category` from [Device](../../../Device/Device/doc/spec.md). 
   + Mandatory.

+ `function` : See attribute `category` from [DeviceModel](../../../Device/DeviceModel/doc/spec.md). 
   + Mandatory.

+ `brandName` : See attribute `category` from [DeviceModel](../../../Device/DeviceModel/doc/spec.md). 
   + Mandatory.

+ `modelName` : See attribute `category` from [DeviceModel](../../../Device/DeviceModel/doc/spec.md). 
   + Mandatory.

+ `manufacturerName` : See attribute `category` from [DeviceModel](../../../Device/DeviceModel/doc/spec.md). 
   + Mandatory.

+ `value` : See attribute `category` from [Device](../../../Device/Device/doc/spec.md).
   + Mandatory.

+ `configuration` : See attribute `category` from [Device](../../../Device/Device/doc/spec.md). 
   + Mandatory.

+ `dateTestStarted` : Timestamp to denotes when the test started.
   + Attribute type: [DateTime](https://schema.org/DateTime).
   + Mandatory.

+ `dateTestEnded` : Timestamp to denotes when the test ended.
   + Attribute type: [DateTime](https://schema.org/DateTime).
   + Mandatory.



## Examples of use
### Creation of PhysicalTest entity

```
{  
  "id": "test-ffffffffff9cbbf4465f0ef30033c587-acc-7118",
  "type": "PhysicalTest",
  "testType": "Timed Up and Go",
  "refUser": "http://207.249.127.162:1234/users/1",
  "category": ["smartphone"],
  "controlledProperty": ["accelerometer"],
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

## Use it with a real service

T.B.D.

## Open Issues

T.B.A.
