import csv
import os

# Define the directory and file paths



# Path to your CSV file
csv_file_path = '../../../PantsIndexData - Sheet1.csv'

# Path where the HTML will be saved
output_html_file = ''

# Read data from the CSV file
pants_data = []
with open(csv_file_path, mode='r', newline='', encoding='utf-8') as file:
    csv_reader = csv.DictReader(file)
    for row in csv_reader:
        pants_data.append(row)
        

for i in pants_data:

    coverStr = i['Brand'].replace(' ', '_').replace('\'', '').lower() + "_" + i['Model Name'].replace(' ', '_').replace('\'', '').lower() + "Cover" + ".jpg"
    hoverStr = i['Brand'].replace(' ', '_').replace('\'', '').lower() + "_" + i['Model Name'].replace(' ', '_').replace('\'', '').lower() + "Hover" + ".jpg"
    filepath = f'../../assets/pantsIMGS/{coverStr}'

    if not os.path.exists(filepath):
         continue
    
    directory = f"../../pages/{i['Brand'].replace(' ', '').replace('\'', '').lower()}{i['Model Name'].replace(' ', '').replace('\'', '').lower()}"
    filename = f"{i['Brand'].replace(' ', '').replace('\'', '').lower()}{i['Model Name'].replace(' ', '').replace('\'', '').lower()}.html"
    output_html_file = os.path.join(directory, filename)

    # Step 1: Check if the directory exists
    if not os.path.exists(directory):
        # Step 2: Create the directory if it doesn't exist
        os.makedirs(directory)
        print(f"Directory '{directory}' created.")
    else:
        print(f"Directory '{directory}' already exists.")

    
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta name="description" content="A tool to find great pants!" />
            <meta charset="utf-8">
            <title>Pants Index {i['Brand']} {i['Model Name']}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="author" content="">

            <!-- This is linking for the main style sheet -->
            <link rel="stylesheet" href="../../css/pantsPages.css">
        
            <!-- This is the linking for fonts -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">

            <!-- <script src="src/Components/javascript/script.js"></script> -->
        </head>

        <body>

            

            <div id="wrapper">

                <div id="header">
                    <header>
                        <p>PANTS INDEX</p>
                    </header>
                </div>
                <hr/>

                <div id="leftContent">
                    <div class="pantsIMG">
                        <img class="coverIMG" src="../../assets/pantsIMGS/{i['Brand'].replace(' ', '_').replace('\'', '').lower()}_{i['Model Name'].replace(' ', '_').replace('\'', '').lower()}Cover.jpg"/>
                    </div>


                    <div class="pantsIMG">
                        <img class="hoverIMG" src="../../assets/pantsIMGS/{i['Brand'].replace(' ', '_').replace('\'', '').lower()}_{i['Model Name'].replace(' ', '_').replace('\'', '').lower()}Hover.jpg"/>
                    </div>
                    
                </div>
                                    
                <div id="rightContent"> 
                    <div class="description">
                        <h4>{i['Model Name'].upper()}</h4>
                        <p>{i['Brand'].upper()}</p>
                        
                        <p>WAIST: {i['Waist']} INS</p>
                        <p>INSEAM: {i['Inseam']} INS</p>
                        <p>RISE: {i['Rise']} INS</p>
                        <p>THIGH: {i['Thigh']} INS</p>
                        <p>KNEE: {i['Knee']} INS</p>
                        <p>HEM/LEG OPENING: {i['Leg Opening']} INS</p>

                        <p id="diclaimer">MEASUREMENTS BASED ON SIZE {i['Listed Size']}</p>
                    </div>
                    
                </div>

            </div>
            

        

        <script src=""></script>

        </body>
    </html>
    """

    
    with open(output_html_file, 'w', encoding='utf-8') as file:
            file.write(html_content)
# Generate the HTML content

# Write the generated HTML content to the index.html file


print(f"index.html has been generated and saved to {output_html_file}")
