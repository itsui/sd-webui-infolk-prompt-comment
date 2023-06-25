# Stable Diffusion Extension

This is a simple extension to Stable Diffusion that allows users to temporarily disable parts of the prompt. With this extension, you can 'comment out' parts of your prompt to prevent them from influencing the model's responses, similarly to commenting out lines of code in many programming languages.

## How to Use

 To use the extension, simply include a '#' character at the beginning of any line in the prompt that you wish to disable. For example, to disable the line 'This is an example sentence', you would write '#This is an example sentence'.

The line starting with '#' will not influence the model's responses, but will still be visible in the prompt for reference.


The above block of text will be ignored by the model.

To re-enable a line or block of text, simply remove the '#' character.

## Issues and Contributions

If you encounter any issues with the extension or have suggestions for improvements, please open an issue on this repository. Contributions are also welcome.


To install go to the Automatic1111 UI >  extensions tab > install from url and add the github url
