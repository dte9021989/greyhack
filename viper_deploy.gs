// Script to copy Viper executable and make it universally executable
// Currently in development

// Define source host machine
hostComputer = get_shell.host_computer

// Define source and destination file paths
sourcePath = hostComputer.File("/home/mor0/Downloads/viper")
destinationPath = hostComputer.File("/home/mor0/Desktop/working/viper_deploy")

// Copy the file
copyResult = sourcePath.copy(destinationPath)

// Change permissions of the copied file
destinationPath.chmod("o-wrx", true)

// Output message indicating success
print("File copied and permissions changed successfully.")
