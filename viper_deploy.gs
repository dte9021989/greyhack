// Script to copy Viper executable and make it universally executable
// Currently in development

// Define source file and destination path and name
sourceFile = get_shell.host_computer.File("/bin/viper")
destinationPath = "/home/mor0/Desktop/working"
destinationName = "viper_deploy"

// Copy the file
copyResult = sourceFile.copy(destinationPath, destinationName)