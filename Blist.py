import re

def parse_document(doc_text):
    # Initialize variables to store the HTML code
    html_code = ""
    current_level = 0
    bullet_regex = re.compile(r"^(\s*)\-")

    # Iterate through each line in the document text
    for line in doc_text.splitlines():
        match = bullet_regex.match(line)
        if match:
            # This line is a bullet point
            level = len(match.group(1)) // 2  # Count the number of spaces before the bullet point
            if level > current_level:
                # Increase the indent level
                html_code += "<ul>\n"
                current_level = level
            elif level < current_level:
                # Decrease the indent level
                html_code += "</ul>\n" * (current_level - level)
                current_level = level
            # Add the bullet point as a list item
            html_code += "<li>" + line[level+1:] + "</li>\n"
        else:
            # This line is not a bullet point
            html_code += line + "\n"

    # Close any remaining open list tags
    html_code += "</ul>\n" * current_level

    return html_code
