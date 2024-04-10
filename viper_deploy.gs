// Script to copy Viper executable and make it universally executable
// Currently in development

// Define computer object
comp = get_shell.host_computer

// Define source file and destination path and name
sourceFile = comp.File("/bin/viper")
destinationPath = "/home/mor0/Desktop/working"
destinationName = "viper_deploy"

// Copy the file
copyResult = sourceFile.copy(destinationPath, destinationName)