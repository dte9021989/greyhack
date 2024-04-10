// Script to copy Viper executable and make it universally executable

// Define computer object
comp = get_shell.host_computer

// Define source file and destination path and name
sourceFile = comp.File("/bin/viper")
destinationPath = "/home/mor0/Desktop/working"
destinationName = "viper_deploy"
copiedFile = destinationPath + "/" + destinationName

// Copy the file
copyResult = sourceFile.copy(destinationPath, destinationName)

// Print copy success
print("viper_deploy successfully copied to /home/mor0/Desktop/working")

// Instantiate file object for deployed Viper
deployedViper = comp.File(copiedFile)

// Make Deployed Viper universally executable
deployedViper.chmod("o+wrx", false)

// Print permission update success
print("Permissions updated on Deployed Viper to universal execution")