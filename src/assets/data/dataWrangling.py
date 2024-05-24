import pandas as pd
import numpy as np
import sys


# allows you to call the data input to be put into the cm or in csv
# possible command options should be 'cms' and 'ins'
command = sys.argv[1]


# outputs the command you called
print(command)


# checks to make sure it is either in inches or cms
if command != 'cms' and command != 'ins':
    print('invalid args')
    exit()



def convertToCms(str_in):
    try:
        str_in = str_in.lower()
        str_in = str_in.strip()

        if 'in' in str_in or 'inches' in str_in:
            str_in = str_in.replace('inches', '')
            str_in = str_in.replace('in', '')
            output = float(str_in)
            output = 2.54 * output
        elif 'cms' in str_in or 'centimeters' in str_in:
            str_in = str_in.replace('cms', '')
            str_in = str_in.replace('centimeters', '')
            output = float(str_in)
        else:
            output = np.nan
    except:
        output = np.nan
 
    return output

def convertToIns(str_in):
    try:
        str_in = str_in.lower()
        str_in = str_in.strip()

        if 'in' in str_in or 'inches' in str_in:
            str_in = str_in.replace('inches', '')
            str_in = str_in.replace('in', '')
            output = float(str_in)
            
        elif 'cms' in str_in or 'centimeters' in str_in:
            str_in = str_in.replace('cms', '')
            str_in = str_in.replace('centimeters', '')
            output = float(str_in)
            output = round(output / 2.54, 3)
        else:
            output = np.nan
    except:
        output = np.nan
 
    return output


# handles the cms case
if command == 'cms':
    df = pd.read_csv('gatheredMeasurements.csv')
    df['Waist'] = df['Waist'].apply(convertToCms)
    df['Inseam'] = df['Inseam'].apply(convertToCms)
    df['Rise'] = df['Rise'].apply(convertToCms)
    df['Thigh'] = df['Thigh'].apply(convertToCms)
    df['Knee'] = df['Knee'].apply(convertToCms)
    df['Hem'] = df['Hem'].apply(convertToCms)
    df.to_csv('gatheredCmsMeasurements.csv', index=False)

if command == 'ins':
    df = pd.read_csv('gatheredMeasurements.csv')
    df['Waist'] = df['Waist'].apply(convertToIns)
    df['Inseam'] = df['Inseam'].apply(convertToIns)
    df['Rise'] = df['Rise'].apply(convertToIns)
    df['Thigh'] = df['Thigh'].apply(convertToIns)
    df['Knee'] = df['Knee'].apply(convertToIns)
    df['Hem'] = df['Hem'].apply(convertToIns)
    df.to_csv('gatheredInsMeasurements.csv', index=False)





print(df)