// Define shell object
shell = get_shell

// Execute child scripts
shell.launch("/bin/DeployViper")
shell.launch("/bin/DeployAdminMonitor")
shell.launch("/bin/DeployCleanup")