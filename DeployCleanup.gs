// Script to copy the cleanup executable and make it universally executable

// Define computer object
comp = get_shell.host_computer

// Define source file and destination path and name
sourceFile = comp.File("/bin/cleanup")
destinationPath = "/home/mor0/Desktop/working"
destinationName = "cleanup"
copiedFile = destinationPath + "/" + destinationName

// Copy the file
copyResult = sourceFile.copy(destinationPath, destinationName)

// Print copy success
print("cleanup successfully copied to /home/mor0/Desktop/working")

// Instantiate file object for deployed Viper
deployedCleanup = comp.File(copiedFile)

// Make Deployed Viper universally executable
deployedCleanup.chmod("u+wrx", false)
deployedCleanup.chmod("g+wrx", false)
deployedCleanup.chmod("o+wrx", false)

// Print permission update success
print("Permissions updated on Cleanup script to universal execution")