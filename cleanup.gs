//Script to clean up deployed tools to victim machine

//Define computer object
comp = get_shell.host_computer

//Define files to clean up
viper_file = comp.File("/root/viper_deploy")
adminmonitor_file = comp.File("/root/adminmonitor_deploy")
cleanup_file = comp.File("/root/cleanup")

//Delete specified files
viper_file.delete
adminmonitor_file.delete
cleanup_file.delete

//Print success message
print("Tools cleaned up")