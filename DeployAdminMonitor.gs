// Script to copy Admin Monitor executable and make it universally executable

// Define computer object
comp = get_shell.host_computer

// Define source file and destination path and name
sourceFile = comp.File("/bin/AdminMonitor.exe")
destinationPath = "/home/mor0/Desktop/working"
destinationName = "adminmonitor_deploy"
copiedFile = destinationPath + "/" + destinationName

// Copy the file
copyResult = sourceFile.copy(destinationPath, destinationName)

// Print copy success
print("AdminMonitor successfully copied to /home/mor0/Desktop/working")

// Instantiate file object for deployed AdminMonitor
deployedAdminMonitor = comp.File(copiedFile)

// Make Deployed AdminMonitor universally executable
deployedAdminMonitor.chmod("u+wrx", false)
deployedAdminMonitor.chmod("g+wrx", false)
deployedAdminMonitor.chmod("o+wrx", false)

// Print permission update success
print("Permissions updated on Deployed AdminMonitor to universal execution")