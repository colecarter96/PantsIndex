import csv
import os

# Path to your CSV file
csv_file_path = '../../../PantsIndexData - Sheet1.csv'

# Path where the HTML will be saved
output_html_file = '../../../index2.html'

# Read data from the CSV file
pants_data = []
with open(csv_file_path, mode='r', newline='', encoding='utf-8') as file:
    csv_reader = csv.DictReader(file)
    for row in csv_reader:
        pants_data.append(row)
        


# Generate the HTML content
html_content = """
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta name="description" content="A tool to find great pants!" />
        <meta charset="utf-8">
        <title>Pants Index</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="">

        <!-- This is linking for the main style sheet -->
        <link rel="stylesheet" href="./src/css/style.css">
        <link rel="stylesheet" href ="./src/css/slider.css">
        <link rel="stylesheet" href ="./src/css/slider2.css">
        <link rel="stylesheet" href ="./src/css/slider3.css">
    
        <!-- This is the linking for fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">

        <!-- <script src="src/Components/javascript/script.js"></script> -->
    </head>

    <body>

        

        <div id="wrapper">

            <div id="header">
                <!-- <span onclick="openNav()">open</span> -->
                <h5>FILTER</h5> 
                <div id="hamburgerMenu">&#9776;</div>
                <header>
                    <p>PANTS INDEX</p>
                </header>
                
            </div>
            <hr/>


            

            <div id="leftNav">
                <!-- <div class="leftFilter"> -->
                <span id="closeButton">&times;</span>

                <!-- <div id="genderButtons" class="buttonGroup">
                    <p>MENSWEAR</p>
                    <p>WOMENSWEAR</p>
                </div> -->

                <h4>FILTER</h4>

                

                <div class="buttonGroup">
                    <p>THIGH</p>
                    <div class="slider-container1">
                        <div class="slider-track1"></div>
                        <input type="range" min="5" max="15" step="0.5" value="5" id="slider-lower1">
                        <input type="range" min="5" max="15" step="0.5" value="15" id="slider-upper1">
                    </div>
                    <div class="values1">
                        <span id="value-lower1">5.0</span> - <span id="value-upper1">15.0</span>
                    </div>
                </div>

                <div class="buttonGroup">
                    <p>LEG OPENING</p>
                    <div class="slider-container2">
                        <div class="slider-track2"></div>
                        <input type="range" min="5" max="15" step="0.5" value="5" id="slider-lower2">
                        <input type="range" min="5" max="15" step="0.5" value="15" id="slider-upper2">
                    </div>
                    <div class="values2">
                        <span id="value-lower2">5.0</span> - <span id="value-upper2">15.0</span>
                    </div>
                </div>
                
                <!-- <div class="buttonGroup">
                    <p>TAPER RATIO</p>   
                    <div class="slider-container">
                        <div class="slider-track"></div>
                        <input type="range" min="6" max="19" step="0.5" value="9" id="slider-lower">
                        <input type="range" min="7" max="15" step="0.5" value="12" id="slider-upper">
                    </div>
                    <div class="values">
                        <span id="value-lower">20</span> - <span id="value-upper">80</span>
                    </div>
                </div> -->

                <!-- <div class="buttonGroup">
                    <p>MATERIAL</p>  
                    <button>Denim</button>
                    <button>Cotton</button>
                    <button>Wool</button>
                    <button>Linen</button>
                </div> -->

                <div class="buttonGroup">
                    <p>RISE</p>    
                    <div class="slider-container3">
                        <div class="slider-track3"></div>
                        <input type="range" min="5" max="15" step="0.5" value="5" id="slider-lower3">
                        <input type="range" min="5" max="15" step="0.5" value="15" id="slider-upper3">
                    </div>
                    <div class="values3">
                        <span id="value-lower3">5.0</span> - <span id="value-upper3">15.0</span>
                    </div>
                </div>

                <div class="buttonGroup">
                    <p>RESET</p>
                    <button id="resetFilters"> 
                      Reset     
                    </button>
                </div>
                
                
                     
                
                  
                <!-- </div> -->
            </div>
                
            
            
            <div id="content">
            
                
                
            
                

"""



# Loop through each pants entry from the CSV and add it as a pants card in the HTML
for i in pants_data:
    pants_card = f"""

                <div class="pantsCard" onclick="location.href='./src/pages/{i['Brand'].replace(' ', '').replace('\'', '').lower()}{i['Model Name'].replace(' ', '').replace('\'', '').lower()}/{i['Brand'].replace(' ', '').replace('\'', '').lower()}{i['Model Name'].replace(' ', '').replace('\'', '').lower()}.html';" rise="{i['Rise']}" thigh="{i['Thigh']}" knee="{i['Knee']}" leg-opening="{i['Leg Opening']}">
                    <div class="pantsCardIMG">
                        <img class="coverIMG" src="./src/assets/pantsIMGS/{i['Brand'].replace(' ', '_').replace('\'', '').lower()}_{i['Model Name'].replace(' ', '_').replace('\'', '').lower()}Cover.jpg"/>
                        <img class="hoverIMG" src="./src/assets/pantsIMGS/{i['Brand'].replace(' ', '_').replace('\'', '').lower()}_{i['Model Name'].replace(' ', '_').replace('\'', '').lower()}Hover.jpg"/>
                    </div>
                    <h3>{i['Model Name'].upper()}</h3>
                    <p>{i['Brand'].upper()}</p>
                    <p><strong>{i['Price']}</strong></p>
                </div>

    """
    coverStr = i['Brand'].replace(' ', '_').replace('\'', '').lower() + "_" + i['Model Name'].replace(' ', '_').replace('\'', '').lower() + "Cover" + ".jpg"
    hoverStr = i['Brand'].replace(' ', '_').replace('\'', '').lower() + "_" + i['Model Name'].replace(' ', '_').replace('\'', '').lower() + "Hover" + ".jpg"
    filepath = f'../../assets/pantsIMGS/{coverStr}'

    if os.path.exists(filepath):
        html_content += pants_card

# Close the content div and add slider functionality
html_content += """
            </div>

            

        </div>
            
        

      

    <script src="src/Components/javascript/script.js"></script>
    <script src="src/Components/javascript/slider.js"></script>
    <!-- <script src="src/Components/javascript/dynamicGeneration.js"></script> -->
    <!-- <script src="src/Components/javascript/slider2.js"></script>
    <script src="src/Components/javascript/slider3.js"></script> -->

    </body>
</html>
"""

# Write the generated HTML content to the index.html file
with open(output_html_file, 'w', encoding='utf-8') as file:
    file.write(html_content)

print(f"index.html has been generated and saved to {output_html_file}")
