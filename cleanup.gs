//Script to clean up deployed tools to victim machine

//Define computer object
comp = get_shell.host_computer

//Define files to clean up
viper_file = comp.File("/root/viper_deploy")
adminmonitor_file = comp.File("/root/adminmonitor_deploy")

//Delete specified files
viper_file.delete