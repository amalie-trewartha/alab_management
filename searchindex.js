Search.setIndex({docnames:["alab_management","alab_management.config","alab_management.device_manager","alab_management.device_view","alab_management.device_view.device","alab_management.device_view.device_view","alab_management.experiment_manager","alab_management.experiment_view","alab_management.experiment_view.experiment","alab_management.experiment_view.experiment_view","alab_management.lab_view","alab_management.logger","alab_management.sample_view","alab_management.sample_view.sample","alab_management.sample_view.sample_view","alab_management.task_actor","alab_management.task_manager","alab_management.task_view","alab_management.task_view.task","alab_management.task_view.task_view","device_definition","index","installation","modules","setup","task_definition"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["alab_management.rst","alab_management.config.rst","alab_management.device_manager.rst","alab_management.device_view.rst","alab_management.device_view.device.rst","alab_management.device_view.device_view.rst","alab_management.experiment_manager.rst","alab_management.experiment_view.rst","alab_management.experiment_view.experiment.rst","alab_management.experiment_view.experiment_view.rst","alab_management.lab_view.rst","alab_management.logger.rst","alab_management.sample_view.rst","alab_management.sample_view.sample.rst","alab_management.sample_view.sample_view.rst","alab_management.task_actor.rst","alab_management.task_manager.rst","alab_management.task_view.rst","alab_management.task_view.task.rst","alab_management.task_view.task_view.rst","device_definition.rst","index.rst","installation.rst","modules.rst","setup.rst","task_definition.rst"],objects:{"":[[0,0,0,"-","alab_management"]],"alab_management.config":[[1,1,1,"","froze_config"]],"alab_management.device_manager":[[2,2,1,"","DeviceManager"],[2,2,1,"","DeviceWrapper"],[2,2,1,"","DevicesClient"]],"alab_management.device_manager.DeviceManager":[[2,3,1,"","on_message"],[2,3,1,"","run"]],"alab_management.device_manager.DeviceWrapper":[[2,2,1,"","DeviceMethodWrapper"],[2,4,1,"","name"]],"alab_management.device_manager.DeviceWrapper.DeviceMethodWrapper":[[2,4,1,"","method"]],"alab_management.device_manager.DevicesClient":[[2,3,1,"","call"],[2,3,1,"","create_device_wrapper"],[2,3,1,"","on_message"]],"alab_management.device_view":[[4,0,0,"-","device"],[5,0,0,"-","device_view"]],"alab_management.device_view.device":[[20,2,1,"","BaseDevice"],[4,1,1,"","add_device"],[4,1,1,"","get_all_devices"]],"alab_management.device_view.device.BaseDevice":[[20,3,1,"","__init__"],[20,5,1,"","description"],[20,3,1,"","emergent_stop"],[4,3,1,"","is_running"],[20,4,1,"","sample_positions"]],"alab_management.device_view.device_view":[[5,2,1,"","DeviceStatus"],[5,2,1,"","DeviceView"]],"alab_management.device_view.device_view.DeviceStatus":[[5,5,1,"","ERROR"],[5,5,1,"","HOLD"],[5,5,1,"","IDLE"],[5,5,1,"","OCCUPIED"],[5,5,1,"","UNKNOWN"]],"alab_management.device_view.device_view.DeviceView":[[5,3,1,"","add_devices_to_db"],[5,3,1,"","clean_up_device_collection"],[5,3,1,"","execute_command"],[5,3,1,"","get_all"],[5,3,1,"","get_available_devices"],[5,3,1,"","get_device"],[5,3,1,"","get_devices_by_task"],[5,3,1,"","get_status"],[5,3,1,"","occupy_device"],[5,3,1,"","query_property"],[5,3,1,"","release_device"],[5,3,1,"","request_devices"],[5,3,1,"","sync_device_status"]],"alab_management.experiment_manager":[[6,2,1,"","ExperimentManager"]],"alab_management.experiment_manager.ExperimentManager":[[6,3,1,"","handle_pending_experiments"],[6,3,1,"","mark_completed_experiments"],[6,3,1,"","run"]],"alab_management.experiment_view":[[8,0,0,"-","experiment"],[9,0,0,"-","experiment_view"]],"alab_management.experiment_view.experiment":[[8,2,1,"","InputExperiment"]],"alab_management.experiment_view.experiment.InputExperiment":[[8,5,1,"","name"],[8,5,1,"","samples"],[8,5,1,"","tasks"]],"alab_management.experiment_view.experiment_view":[[9,2,1,"","ExperimentStatus"],[9,2,1,"","ExperimentView"]],"alab_management.experiment_view.experiment_view.ExperimentStatus":[[9,5,1,"","COMPLETED"],[9,5,1,"","PENDING"],[9,5,1,"","RUNNING"]],"alab_management.experiment_view.experiment_view.ExperimentView":[[9,3,1,"","create_experiment"],[9,3,1,"","get_experiment"],[9,3,1,"","get_experiments_with_status"],[9,3,1,"","update_experiment_status"],[9,3,1,"","update_sample_task_id"]],"alab_management.lab_view":[[10,6,1,"","DeviceRunningException"],[10,2,1,"","LabView"],[10,2,1,"","ResourcesRequest"]],"alab_management.lab_view.LabView":[[10,3,1,"","get_locked_sample_positions"],[10,3,1,"","get_sample"],[10,3,1,"","move_sample"],[10,3,1,"","request_resources"],[10,4,1,"","task_id"]],"alab_management.lab_view.ResourcesRequest":[[10,3,1,"","preprocess"]],"alab_management.logger":[[11,2,1,"","DBLogger"],[11,2,1,"","LoggingLevel"],[11,2,1,"","LoggingType"]],"alab_management.logger.DBLogger":[[11,3,1,"","filter_log"],[11,3,1,"","log"],[11,3,1,"","log_amount"],[11,3,1,"","log_characterization_result"],[11,3,1,"","log_device_signal"],[11,3,1,"","system_log"]],"alab_management.logger.LoggingLevel":[[11,5,1,"","CRITICAL"],[11,5,1,"","DEBUG"],[11,5,1,"","ERROR"],[11,5,1,"","FATAL"],[11,5,1,"","INFO"],[11,5,1,"","WARN"],[11,5,1,"","WARNING"]],"alab_management.logger.LoggingType":[[11,5,1,"","CHARACTERIZATION_RESULT"],[11,5,1,"","DEVICE_SIGNAL"],[11,5,1,"","OTHER"],[11,5,1,"","SAMPLE_AMOUNT"],[11,5,1,"","SYSTEM_LOG"]],"alab_management.sample_view":[[13,0,0,"-","sample"],[14,0,0,"-","sample_view"]],"alab_management.sample_view.sample":[[13,2,1,"","Sample"],[13,2,1,"","SamplePosition"]],"alab_management.sample_view.sample.Sample":[[13,5,1,"","name"],[13,5,1,"","position"],[13,5,1,"","task_id"]],"alab_management.sample_view.sample.SamplePosition":[[13,5,1,"","SEPARATOR"],[13,5,1,"","description"],[13,5,1,"","name"],[13,5,1,"","number"]],"alab_management.sample_view.sample_view":[[14,2,1,"","SamplePositionRequest"],[14,2,1,"","SamplePositionStatus"],[14,2,1,"","SampleView"]],"alab_management.sample_view.sample_view.SamplePositionRequest":[[14,2,1,"","Config"],[14,3,1,"","from_py_type"],[14,3,1,"","from_str"],[14,5,1,"","number"],[14,5,1,"","prefix"]],"alab_management.sample_view.sample_view.SamplePositionRequest.Config":[[14,5,1,"","extra"]],"alab_management.sample_view.sample_view.SamplePositionStatus":[[14,5,1,"","EMPTY"],[14,5,1,"","LOCKED"],[14,5,1,"","OCCUPIED"]],"alab_management.sample_view.sample_view.SampleView":[[14,3,1,"","add_sample_positions_to_db"],[14,3,1,"","clean_up_sample_position_collection"],[14,3,1,"","create_sample"],[14,3,1,"","get_available_sample_position"],[14,3,1,"","get_sample"],[14,3,1,"","get_sample_position"],[14,3,1,"","get_sample_position_status"],[14,3,1,"","get_sample_positions_by_task"],[14,3,1,"","is_unoccupied_position"],[14,3,1,"","lock_sample_position"],[14,3,1,"","move_sample"],[14,3,1,"","release_sample_position"],[14,3,1,"","request_sample_positions"],[14,3,1,"","update_sample_task_id"]],"alab_management.task_actor":[[15,6,1,"","ParameterError"]],"alab_management.task_manager":[[16,2,1,"","RequestMixin"],[16,2,1,"","RequestStatus"],[16,2,1,"","ResourceRequester"],[16,2,1,"","ResourcesRequest"],[16,2,1,"","TaskManager"]],"alab_management.task_manager.RequestMixin":[[16,3,1,"","get_request"],[16,3,1,"","get_request_with_status"],[16,3,1,"","update_request_status"]],"alab_management.task_manager.RequestStatus":[[16,5,1,"","CANCELED"],[16,5,1,"","ERROR"],[16,5,1,"","FULFILLED"],[16,5,1,"","NEED_RELEASE"],[16,5,1,"","PENDING"],[16,5,1,"","RELEASED"]],"alab_management.task_manager.ResourceRequester":[[16,3,1,"","release_resources"],[16,3,1,"","request_resources"]],"alab_management.task_manager.ResourcesRequest":[[16,3,1,"","preprocess"]],"alab_management.task_manager.TaskManager":[[16,3,1,"","handle_released_resources"],[16,3,1,"","handle_requested_resources"],[16,3,1,"","run"],[16,3,1,"","submit_ready_tasks"]],"alab_management.task_view":[[18,0,0,"-","task"],[19,0,0,"-","task_view"]],"alab_management.task_view.task":[[25,2,1,"","BaseTask"],[18,1,1,"","add_task"],[18,1,1,"","get_all_tasks"]],"alab_management.task_view.task.BaseTask":[[25,3,1,"","__init__"],[18,3,1,"","create_sub_task"],[18,3,1,"","get_one_child_sub_task_id"],[25,3,1,"","run"]],"alab_management.task_view.task_view":[[19,2,1,"","TaskStatus"],[19,2,1,"","TaskView"]],"alab_management.task_view.task_view.TaskStatus":[[19,5,1,"","COMPLETED"],[19,5,1,"","ERROR"],[19,5,1,"","PAUSED"],[19,5,1,"","READY"],[19,5,1,"","REQUESTING_RESOURCE"],[19,5,1,"","RUNNING"],[19,5,1,"","STOPPED"],[19,5,1,"","WAITING"]],"alab_management.task_view.task_view.TaskView":[[19,3,1,"","create_task"],[19,3,1,"","encode_task"],[19,3,1,"","get_ready_tasks"],[19,3,1,"","get_status"],[19,3,1,"","get_task"],[19,3,1,"","try_to_mark_task_ready"],[19,3,1,"","update_result"],[19,3,1,"","update_status"],[19,3,1,"","update_task_dependency"]],alab_management:[[1,0,0,"-","config"],[2,0,0,"-","device_manager"],[3,0,0,"-","device_view"],[6,0,0,"-","experiment_manager"],[7,0,0,"-","experiment_view"],[10,0,0,"-","lab_view"],[11,0,0,"-","logger"],[12,0,0,"-","sample_view"],[15,0,0,"-","task_actor"],[16,0,0,"-","task_manager"],[17,0,0,"-","task_view"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","attribute","Python attribute"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:property","5":"py:attribute","6":"py:exception"},terms:{"0":[18,25],"1":[5,9,11,13,14,16,19],"10":11,"1d":11,"1h":11,"2":[5,9,11,14,16,19],"20":11,"27017":[1,24],"3":[5,9,11,14,16,19],"30":[2,11],"4":[5,11,16,18,19,25],"40":11,"5":[5,11,16,19],"50":11,"502":20,"5672":1,"6":[16,19],"7":19,"8":19,"abstract":[4,18,20,21,25],"class":[2,4,5,6,8,9,10,11,13,14,16,18,19,20,21,25],"default":[14,24],"do":[10,21],"enum":[5,9,11,14,16,19],"float":25,"function":[2,5,10,11,14,15,18,20,21,25],"import":21,"int":[10,11,13,20],"new":[10,14,19],"return":[1,2,4,5,9,10,11,14,16,18,19,20,25],"super":[20,25],"true":[2,5],"try":[10,14,16,18,19,25],"while":[18,19,25],A:[2,9,10,11,13,14,21,24],And:10,At:9,By:14,For:[20,21,24],If:[5,10,14,16,19,24],In:[18,21,25],It:[1,4,6,10,15,16,19,20,21],The:[2,4,5,9,10,13,14,15,16,18,19,20,21,24,25],There:5,To:[20,22,24],With:21,__exit__:[5,14],__init__:[20,24,25],_bodi:2,_check_statu:2,_id:[13,19],_sampl:8,_task:8,abc:[4,18],about:[4,18,20,25],access:[2,10,22],accord:24,actor:16,actual:[14,16],acycl:21,adapt:2,add:[9,19],add_devic:4,add_devices_to_db:5,add_sample_positions_to_db:14,add_task:18,address:20,administ:2,aim:21,alab:[6,21,24],alab_manag:20,alabo:24,all:[1,2,4,5,10,14,16,18,19,20,21,25],alloc:[18,25],allow:[1,21],alreadi:[5,14],also:[9,10,18,19,21,24,25],amount:11,an:[1,4,9,18,20,21,25],ani:[2,4,5,6,9,10,11,14,16,19,20],api:5,appear:[5,14],ar:[4,6,10,14,16,18,19,20,21,25],architectur:21,arg:[2,5,18,20,25],argument:2,assign:[9,10,16,18,19,21,24,25],attribut:[4,20],attributeerror:5,authent:24,automat:[18,24,25],autonom:[0,21],avail:[10,14,18,25],back:2,base:[2,4,5,6,8,9,10,11,13,14,15,16,18,19],basedevic:[4,5,20,21],basemodel:[8,10,14,16],basetask:[18,19,21,25],basic:[2,11,13,21],batch:21,batteri:11,been:[9,13],befor:[19,24],belong:10,besid:24,between:21,bool:[4,5,14,16,19],briefli:13,bson:[10,13],call:[2,5,14,15,18,25],callabl:5,callback:2,can:[2,4,10,11,13,14,18,19,20,21,24,25],cancel:16,cannot:[18,19,25],certain:[2,11,21],channel:2,character:11,characterization_result:11,charg:11,check:[4,14,16,19],chemic:[11,21],classmethod:[10,14,16],classvar:[4,13,20],clean:5,clean_up_device_collect:5,clean_up_sample_position_collect:14,client:2,code:[20,21],collect:[5,6,9,14,16,19,21],com:2,come:11,command:[2,18,25],commun:21,complet:[6,9,18,19,21,25],conduct:[2,21],config:[0,14,23,24],config_:1,configur:[1,21],conflict:[18,25],connect:[20,24],constrainedintvalu:14,constrainedstrvalu:8,construct:21,contain:[1,21],content:23,context:[10,18,25],conveni:19,convert:1,convien:19,coordin:[4,13,20],core:16,correspond:19,creat:[2,9,14,18,21],create_device_wrapp:2,create_experi:9,create_sampl:14,create_sub_task:18,create_task:19,creation:9,critic:11,current:[13,18,19,21,25],custom:[11,20,22,24,25],cycl:21,dag:21,dashboard:5,data:[1,8,10,11,14,16,18,25],databas:[5,6,8,9,11,13,14,15,16,18,19,21,22,24,25],db:[5,14,24],dblogger:11,debug:11,def:[4,20,25],default_lab:1,defin:[2,4,8,13,14,18,21,24],definit:[5,13,21,22],depend:21,describ:[4,13,20,21],descript:[4,5,13,14,20],dest:[18,25],devic:[0,2,3,5,10,11,18,21,22,24,25],device_1:24,device_2:24,device_3:24,device_manag:[0,23],device_nam:[2,5],device_rpc:2,device_sign:11,device_typ:5,device_type_nam:5,device_type_str:5,device_types_str:5,device_view:[0,23],devicemanag:2,devicemethodwrapp:2,devicerunningexcept:10,devices_and_posit:[18,25],devices_and_sample_posit:10,devices_cli:2,devicescli:2,deviceslock:5,devicestatu:5,devicetyp:[10,16],deviceview:5,devicewrapp:2,dict:[1,2,4,5,9,10,11,14,16,18,19],die:21,differ:11,dir:24,direct:21,directli:2,directori:24,discuss:22,doe:[4,20],doesn:[4,20],done:[6,9,10,21],dramatiq:[15,16,21],driver:[2,20,21],drop:14,dump:19,duplic:5,dure:[11,19],e:[10,11,18,21,25],each:[10,16,21],easili:[16,21],els:[11,14],emerg:[4,20],emergent_stop:[4,20],empti:[14,21,24],encod:19,encode_task:19,encount:19,end:21,ensur:10,entri:[5,14,19],error:[5,11,14,16,19],etc:21,even:21,event:6,everi:2,everyth:0,exampl:[1,4,18,20,24,25],except:[10,15],execut:[2,11,16,19],execute_command:5,executor:6,exist:14,exp_id:9,experi:[0,6,7,9],experiment_manag:[0,23],experiment_view:[0,23],experimentmanag:6,experimentstatu:9,experimentview:9,extens:21,extra:14,f:[4,20],fals:19,fatal:11,feed:2,file:1,filter:9,filter_log:11,find:[6,10,11,16],finish:[6,19],five:21,flag:6,flexibl:21,folder:22,follow:[1,8,24],forbid:14,format:[8,9,10,16,21],found:[5,19],from:[1,2,4,6,11,16,18,19,20,21,25],from_py_typ:14,from_str:14,froze_config:1,frozen:1,frozen_config:1,fulfil:16,furnac:[4,10,11,18,20,25],furnace_1:10,furnace_t:[4,20],furnacecontrol:20,g:[10,11,21],gener:[1,24],geograph:13,get:[1,2,4,5,9,10,14,18,19,25],get_al:5,get_all_devic:4,get_all_task:18,get_available_devic:5,get_available_sample_posit:14,get_devic:5,get_devices_by_task:5,get_experi:9,get_experiments_with_statu:9,get_locked_sample_posit:10,get_one_child_sub_task_id:18,get_ready_task:19,get_request:16,get_request_with_statu:16,get_sampl:[10,14],get_sample_posit:14,get_sample_position_statu:14,get_sample_positions_by_task:14,get_statu:[5,19],get_task:19,get_temperatur:[18,25],git:21,github:[2,21],given:[5,14],graph:21,great:21,ha:[5,9,10,13,14,18,21,24,25],handl:[2,16,19,24],handle_pending_experi:6,handle_released_resourc:16,handle_requested_resourc:16,have:[5,10,16,21,22],heat:[4,20,21,25],here:[4,18,20,25],higher:11,hold:[4,5,13,19,20,21],host:[1,21,24],how:[4,18,20,22,24,25],http:2,i:[18,25],id:[5,9,10,13,14,18,19,21,25],identifi:[4,5,13,20,25],idl:[5,21],implement:21,includ:[4,5,14,20],incom:6,index:21,indic:[5,14,25],info:[11,14,19],inform:[4,11,20,21],inherit:[4,18,19,20,21,25],init:24,initi:[13,15,20],inputexperi:[8,9],insert:[5,9,14,16,19],insid:[2,4,10,18,20,25],inside_furnac:[18,25],instanc:[2,4,10,14,21],instanti:21,instead:10,intend:9,interest:19,introduc:24,is_run:[4,18,25],is_unoccupied_posit:14,iter:11,its:[5,9,14,19,21],itself:24,job:19,just:[14,21,24],keyword:2,kind:[4,20],know:10,kwarg:[2,5,14,16,18,20,25],lab:[0,4,9,10,13,16,18,20,24,25],lab_view:[0,18,23,25],labview:[9,10,16],later:9,launch:[15,21],lavview:10,least:22,level:11,life:21,like:[21,24],list:[2,4,5,8,9,10,14,16,19,20,21,25],listen:2,load:24,local:22,localhost:[1,24],lock:[14,21],lock_sample_posit:14,log:[11,18,25],log_amount:11,log_characterization_result:11,log_data:11,log_device_sign:[11,18,25],logger:[0,18,23,25],logging_typ:11,logginglevel:11,loggingtyp:11,look:24,loop:[6,16],m:24,mai:[5,21,24],main:[8,10,14,16,21],manag:[0,2,6,9,10,14,16,18,19,24,25],mani:6,manipul:19,manual:[4,20],map:[4,20],mappingproxi:1,mark:[6,19],mark_completed_experi:6,match:14,matter:[4,20],maus:2,mean:13,messag:2,method:[2,5,6,9,14,19,20],method_fram:2,method_handl:2,modifi:1,modul:[23,24],mongodb:[1,19,21,22],more:[18,20,24],move:[10,18,21,25],move_sampl:[10,14],moving_task:[18,25],multipl:[10,21],must:[19,21,22,24],name:[1,2,4,5,8,10,13,14,18,19,20,24,25],nameerror:5,need:[4,5,14,20,21,24,25],need_releas:[5,14,16],neither:14,next:19,next_task:19,none:[5,10,13,14,16,19],nor:14,note:10,now:[5,19],number:[10,13,14,18,25],object:[2,5,6,9,10,11,13,14,16,19,20],objectid:[5,9,10,11,13,14,19,25],occupi:[5,10,14,21],occupy_devic:5,okai:24,old:19,on_messag:2,onc:20,one:[2,5,10,14,19,21,22],ones:5,onli:[2,5,10,20,21,24],only_idl:5,oper:21,option:[5,9,13,14,19,25],other:[11,18,25],our:21,out:6,over:[2,5,9,10,14,18,19,21,25],overwrit:19,ownership:[5,18,25],packag:[1,21,23,24],page:21,param:11,paramet:[1,2,5,9,14,15,19,20,21,25],parametererror:15,parent:19,parent_task:25,pars:[6,10],pass:19,password:[1,24],pattern:11,paus:19,pend:[6,9,16,18,21,25],place:21,platform:21,pleas:[20,24],port:[1,20,24],posit:[2,4,10,13,14,18,20,21,25],position_prefix:14,pre_task:19,predefin:[11,21],prefix:[10,14],preprocess:[10,16],prev:19,prev_task:19,prevent:[18,25],previou:[19,21],principl:10,process:[2,9,10,21],project:21,project_root:24,prop:[2,5],proper:15,properti:[2,4,5,10,20],provid:[5,19,21,24],put:[9,10,21],py:[22,24],pydant:[8,10,14,16],pymongo:21,python:[19,21,22,24],queri:[5,10,19],query_properti:5,queue:[2,9],rabbitmq:[1,2],rack:21,rais:[5,10,14,15],rang:11,raw:9,read:[1,6,16,21],readi:[5,16,19,21],real:[2,4,20,21],receiv:2,record:[11,21],redirect:2,refer:[19,20,21,22,24],regardless:5,regist:[4,18,24],registri:[4,18],relat:[3,7,12,17],releas:[5,10,14,16,18,25],release_devic:5,release_resourc:16,release_sample_posit:14,remot:[2,22],renam:19,renew:20,replac:10,repo:[20,24],repositori:21,repres:[10,18,21,25],represent:21,request:[2,5,6,8,10,14,16,18,21,25],request_devic:5,request_id:16,request_resourc:[10,16,18,25],request_sample_posit:14,requesting_resourc:19,requestmixin:16,requeststatu:16,requir:[9,19,21],reserv:14,resourc:[10,14,16,18,21,24,25],resource_request:[10,16],resourcerequest:16,resourcesrequest:[10,16],respons:6,result:[2,11,19],ro:21,robot:21,rpc:2,run:[2,4,5,6,9,10,16,18,19,21,24,25],run_program:[18,25],run_task:15,s:[5,11,14,19,21],same:[5,10,14,18,19,25],sampl:[0,4,6,8,9,10,11,12,14,18,19,20,21,25],sample_1:25,sample_2:25,sample_3:25,sample_4:25,sample_amount:11,sample_id:[9,10,14],sample_posit:[4,14,18,20,25],sample_position_1:10,sample_position_prefix:14,sample_view:[0,4,20,23],sampleposit:[4,13,14,20],samplepositionrequest:[10,14,16],samplepositionslock:14,samplepositionstatu:14,sampleview:14,scan:6,search:21,section:24,see:[9,10],self:[4,18,19,20,25],send:[2,18,25],sensor:11,separ:13,serv:24,server:2,set:[4,5,14,20,22],setpoint:[18,25],setup:22,shall:5,sharabl:21,share:[18,21,25],should:[4,5,8,10,16,18,19,20,21,24,25],signal:11,similar:25,simpl:16,simpli:21,sinc:[10,21],skip:14,snippet:21,so:[4,5,10,16,18,19,20,21,25],some:[4,5,11,14,19,20,21,24],someth:21,sometim:10,sourc:[1,2,4,5,6,8,9,10,11,13,14,15,16,18,19,20,25],specifi:[4,10,14,20,21,24],start:[2,6,10,16,19,21],startwith:14,statement:10,statu:[5,9,14,15,16,19],still:[5,10,21],stop:[4,19,20,21],store:[4,16,19,20,24],str:[2,4,5,9,10,11,13,14,16,18,19,20,25],string:[11,13,25],structur:[2,14],sub_task_id:[18,25],submit:[6,9,16,19,21],submit_ready_task:16,submodul:23,subpackag:23,subtask:18,sync:5,sync_device_statu:5,synthesi:21,system:[5,11,16,20,21,24],system_log:11,t:[4,20],take:[11,18,25],target:24,task:[0,2,5,6,8,9,10,11,14,15,16,17,19,22,24],task_1:24,task_2:24,task_3:24,task_actor:[0,23],task_entri:19,task_id:[2,5,9,10,11,13,14,16,18,19,25],task_manag:[0,15,23],task_result:19,task_typ:[18,19],task_view:[0,23],tasklaunch:16,taskmanag:16,taskstatu:19,taskview:19,tell:14,temperatur:[11,18,21,25],temporari:[4,20],than:11,them:[4,16,20,21,24],thi:[1,2,4,5,6,8,9,10,11,13,14,16,18,19,20,21,22,24,25],thing:[3,7,12,17],through:[10,21],throughout:21,time:[6,11,20],timeout:[2,10,16],toml:24,track:21,transfer:[4,20],translat:19,try_to_mark_task_readi:19,tupl:[14,25],two:21,type:[1,2,4,5,9,10,11,14,16,18,19,20],uid:14,under:[10,21],union:[11,14,19],uniqu:[4,5,13,20],unknown:5,unlock:14,unoccupi:14,until:[10,14,18,19,25],up:[4,5,20,22],updat:[9,10,14,15,19,21],update_experiment_statu:9,update_request_statu:16,update_result:19,update_sample_task_id:[9,14],update_statu:19,update_task_depend:19,us:[2,4,5,9,10,14,15,16,18,19,20,21,24,25],usabl:5,user:[4,8,9,20,21],usernam:[1,24],usual:[5,10,24],valid:[10,14,16],valu:[5,9,10,11,14,16,19,21],valueerror:5,vertex:21,via:[2,21],view:[5,9,10,14,19,21],voltag:11,wait:[19,21],want:10,warn:11,we:[4,5,9,10,11,14,18,19,20,21,22,24,25],websit:21,weight:11,well:[5,21],what:21,when:[4,5,6,10,14,15,18,20,21,25],where:[4,11,20,24],whether:[4,5,14,19],which:[1,2,4,5,9,10,11,13,14,16,18,19,20,21,24,25],within:11,work:[21,24],worker:[15,16],workflow:[11,21],working_dir:[1,24],wrap:2,wrapper:[2,5,9,10,14,16,19,21],write:[8,16,20],wrong:15,wrote:11,xrd:11,yaml:1,you:[10,14,18,20,21,22,24,25],your:[20,24]},titles:["alab_management package","alab_management.config module","alab_management.device_manager module","alab_management.device_view package","alab_management.device_view.device module","alab_management.device_view.device_view module","alab_management.experiment_manager module","alab_management.experiment_view package","alab_management.experiment_view.experiment module","alab_management.experiment_view.experiment_view module","alab_management.lab_view module","alab_management.logger module","alab_management.sample_view package","alab_management.sample_view.sample module","alab_management.sample_view.sample_view module","alab_management.task_actor module","alab_management.task_manager module","alab_management.task_view package","alab_management.task_view.task module","alab_management.task_view.task_view module","Defining a new device","Overview","Installation","alab_management","Set up definition folder","Defining a new task"],titleterms:{"new":[20,25],For:22,actor:21,alab_manag:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,23],command:24,config:1,configur:24,content:[0,3,7,12,17],data:21,defin:[20,25],definit:24,develop:22,devic:[4,20],device_manag:2,device_view:[3,4,5],experi:[8,21],experiment_manag:6,experiment_view:[7,8,9],file:24,folder:24,indic:21,initi:24,instal:22,lab:21,lab_view:10,line:24,logger:11,manag:21,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21],next:[22,24],overview:21,packag:[0,3,7,12,17],prerequisit:22,project:24,purpos:22,s:[22,24],sampl:13,sample_view:[12,13,14],set:24,statu:21,storag:21,structur:24,submodul:[0,3,7,12,17],subpackag:0,tabl:21,task:[18,21,25],task_actor:15,task_manag:16,task_view:[17,18,19],terminolog:21,up:24,via:24,what:[22,24]}})