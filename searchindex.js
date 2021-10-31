Search.setIndex({docnames:["alab_management","alab_management.device_def","alab_management.executor","alab_management.lab_status","alab_management.logger","alab_management.op_def","alab_management.scripts","alab_management.task_manager","alab_management.utils","index","installation","modules","quickstart"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["alab_management.rst","alab_management.device_def.rst","alab_management.executor.rst","alab_management.lab_status.rst","alab_management.logger.rst","alab_management.op_def.rst","alab_management.scripts.rst","alab_management.task_manager.rst","alab_management.utils.rst","index.rst","installation.rst","modules.rst","quickstart.rst"],objects:{"":{alab_management:[0,0,0,"-"]},"alab_management.config":{AlabConfig:[0,1,1,""],froze_config:[0,3,1,""]},"alab_management.config.AlabConfig":{path:[0,2,1,""]},"alab_management.db":{get_collection:[0,3,1,""]},"alab_management.device_def":{base_device:[1,0,0,"-"]},"alab_management.device_def.base_device":{BaseDevice:[1,1,1,""],add_device:[1,3,1,""],get_all_devices:[1,3,1,""],get_device:[1,3,1,""]},"alab_management.device_def.base_device.BaseDevice":{description:[1,4,1,"id0"],init:[1,2,1,""],name:[1,4,1,"id1"],sample_positions:[1,2,1,""]},"alab_management.executor":{executor:[2,0,0,"-"],scheduler:[2,0,0,"-"]},"alab_management.executor.executor":{Executor:[2,1,1,""]},"alab_management.executor.executor.Executor":{run:[2,2,1,""]},"alab_management.lab_status":{device_view:[3,0,0,"-"],sample_view:[3,0,0,"-"],task_view:[3,0,0,"-"]},"alab_management.lab_status.device_view":{DeviceStatus:[3,1,1,""],DeviceView:[3,1,1,""]},"alab_management.lab_status.device_view.DeviceStatus":{ERROR:[3,4,1,""],HOLD:[3,4,1,""],IDLE:[3,4,1,""],RUNNING:[3,4,1,""],STOPPED:[3,4,1,""],UNKNOWN:[3,4,1,""]},"alab_management.lab_status.device_view.DeviceView":{get_device_info:[3,2,1,""],get_status:[3,2,1,""],set_idle:[3,2,1,""],set_running:[3,2,1,""],set_status:[3,2,1,""]},"alab_management.lab_status.sample_view":{SampleView:[3,1,1,""]},"alab_management.lab_status.sample_view.SampleView":{creat_sample_batch:[3,2,1,""],create_sample:[3,2,1,""],delete_sample:[3,2,1,""],delete_sample_batch:[3,2,1,""],find_possible_path:[3,2,1,""],is_valid_position:[3,2,1,""],query_sample:[3,2,1,""],update_sample_position:[3,2,1,""]},"alab_management.lab_status.task_view":{TaskView:[3,1,1,""]},"alab_management.lab_status.task_view.TaskView":{delete_task:[3,2,1,""],get_next_task:[3,2,1,""],get_prev_task:[3,2,1,""],query_task:[3,2,1,""],update_task:[3,2,1,""]},"alab_management.op_def":{base_operation:[5,0,0,"-"]},"alab_management.op_def.base_operation":{BaseMovingOperation:[5,1,1,""],BaseOperation:[5,1,1,""],add_operation:[5,3,1,""],get_all_operations:[5,3,1,""],get_operation:[5,3,1,""]},"alab_management.op_def.base_operation.BaseMovingOperation":{dest_location:[5,2,1,""],get_possible_src_dest_pairs:[5,2,1,""],sample_id:[5,4,1,""],task_id:[5,4,1,""]},"alab_management.op_def.base_operation.BaseOperation":{dest_location:[5,2,1,""],is_running:[5,2,1,""],occupied_positions:[5,2,1,""],operation_location:[5,2,1,""],run:[5,2,1,""],sample_id:[5,4,1,"id0"],task_id:[5,4,1,"id1"]},"alab_management.sample_position":{SamplePosition:[0,1,1,""],SamplePositionPair:[0,1,1,""]},"alab_management.sample_position.SamplePosition":{description:[0,4,1,""],name:[0,4,1,""]},"alab_management.sample_position.SamplePositionPair":{containers:[0,4,1,""],dest:[0,4,1,""],src:[0,4,1,""],task_args:[0,4,1,""]},"alab_management.scripts":{cleanup_lab:[6,0,0,"-"],launch:[6,0,0,"-"],setup_lab:[6,0,0,"-"]},"alab_management.scripts.cleanup_lab":{cleanup_lab:[6,3,1,""]},"alab_management.scripts.launch":{launch_executor:[6,3,1,""],launch_lab:[6,3,1,""],launch_task_manager:[6,3,1,""]},"alab_management.scripts.setup_lab":{add_devices_to_db:[6,3,1,""],add_sample_positions_to_db:[6,3,1,""],add_tasks_to_db:[6,3,1,""],init_with_fake_parameters:[6,3,1,""],make_sample_position_graph:[6,3,1,""],setup_from_device_def:[6,3,1,""],setup_from_task_def:[6,3,1,""],setup_lab:[6,3,1,""]},"alab_management.task_manager":{compiler:[7,0,0,"-"],task_manager:[7,0,0,"-"]},"alab_management.task_manager.task_manager":{TaskManager:[7,1,1,""]},"alab_management.task_manager.task_manager.TaskManager":{run:[7,2,1,""]},"alab_management.utils":{fake_device:[8,0,0,"-"],module_ops:[8,0,0,"-"],typing_ops:[8,0,0,"-"]},"alab_management.utils.fake_device":{FakeDevice:[8,1,1,""]},"alab_management.utils.fake_device.FakeDevice":{init:[8,2,1,""],name:[8,4,1,""],sample_positions:[8,2,1,""]},"alab_management.utils.module_ops":{get_full_cls_name:[8,3,1,""],import_module_from_path:[8,3,1,""],load_definition:[8,3,1,""]},"alab_management.utils.typing_ops":{is_typing:[8,3,1,""]},alab_management:{config:[0,0,0,"-"],db:[0,0,0,"-"],device_def:[1,0,0,"-"],executor:[2,0,0,"-"],lab_status:[3,0,0,"-"],logger:[4,0,0,"-"],op_def:[5,0,0,"-"],sample_position:[0,0,0,"-"],scripts:[6,0,0,"-"],task_manager:[7,0,0,"-"],utils:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"502":12,"abstract":[1,5],"case":0,"class":[0,1,2,3,5,6,7,8,9,12],"default":[3,6],"enum":3,"float":6,"function":3,"import":[6,8,9],"int":[6,12],"return":[0,1,3,5,6,8,9,12],"static":5,"try":[1,8],For:[6,12],ROS:9,The:[1,3,5,6,8,9,12],With:9,__init__:[1,8],__post_init__:[1,8,12],abc:[1,5],abl:[1,8],accepted_arg:6,access:10,actual:9,acycl:9,add:[0,6,9,12],add_devic:1,add_devices_to_db:6,add_oper:5,add_sample_positions_to_db:6,add_tasks_to_db:6,address:12,aim:9,alab:9,alabconfig:0,all:[0,1,3,5,6,9],allow:0,alreadi:6,also:9,ani:[0,3],annot:6,anoth:3,api:3,appear:6,architectur:9,arg:[2,7],around:9,attribut:[1,8],authent:0,autonom:9,base:[0,1,2,3,5,6,7,8],base_devic:[0,8,11],base_oper:[0,11],basedevic:[1,3,6,8,12],basemovingoper:[5,12],baseoper:[5,6,12],basic:[3,9],batch:3,batch_id:3,been:3,between:6,bool:[3,5],bson:5,built:6,call:9,can:[1,3,6,8,9],cannot:[3,6],check:[3,9],classvar:[1,12],cleanup:6,cleanup_lab:[0,11],clear:3,cls:[6,8],code:[9,12],collect:[0,6,9],command:9,commun:9,compil:[0,11],complet:9,config:[6,8,11],config_:0,configur:9,connect:[1,3,8],construct:[9,12],contain:[0,3],content:11,conveni:0,convert:0,core:6,correspond:9,creat:3,creat_sample_batch:3,create_sampl:3,current:[3,9],dag:9,data:[0,5,6],databas:[3,6,9,10],dataclass:12,def:12,defin:[1,3,6,8,9],definit:[6,8,12],delete_sampl:3,delete_sample_batch:3,delete_task:3,describ:[1,8,9],descript:[0,1,6,12],dest:[0,3],dest_loc:5,destin:6,devic:[1,3,6,8,9],device_def:[0,8,11],device_dir:6,device_nam:3,device_view:[0,11],devicestatu:3,deviceview:3,dict:[0,1,3,5,6],direct:9,doesn:[1,8],done:9,driver:12,drop:6,each:[9,12],easier:6,easili:9,edg:6,end:3,error:3,exampl:12,executor:[0,6,11],explan:12,extens:9,extra:9,factori:0,fake:[6,8],fake_devic:[0,11],fakedevic:[6,8],file:[6,8],find:3,find_possible_path:3,finish:9,flexibl:9,format:[9,12],from:[1,3,5,6,8,9,12],froze_config:0,frozen:0,frozen_config:0,furnac:12,furnace_t:12,furnacecontrol:12,gener:[3,6],get:[0,1,3,6,8],get_all_devic:1,get_all_oper:5,get_collect:0,get_devic:1,get_device_info:3,get_full_cls_nam:8,get_next_task:3,get_oper:5,get_possible_src_dest_pair:5,get_prev_task:3,get_statu:3,git:9,github:9,give:3,given:3,graph:9,great:9,has:[3,6,9],have:[9,10,12],heat:12,here:12,hold:[1,3,8,9],host:9,how:[1,6],identifi:[1,3,5,6,8],idl:[3,9],ids:3,implement:[6,9],import_module_from_path:8,includ:[1,6,12],index:9,info:6,inform:[3,9],inherit:[1,3,5,6,12],init:[1,8,12],init_with_fake_paramet:6,initi:[1,3,6,8,9,12],insert:6,insid:12,instanc:[1,6],is_run:5,is_typ:8,is_valid_posit:3,iter:6,its:[3,8],just:[6,9],keyerror:3,kind:1,kwarg:[2,7],lab:8,lab_statu:[0,11],lambda:3,last:3,launch:[0,9,11],launch_executor:6,launch_lab:6,launch_task_manag:6,least:10,like:[6,9],list:[0,1,3,5,6],load:8,load_definit:8,local:10,locat:6,logger:[0,5,11],machin:3,mai:[1,8,9],make:6,make_sample_position_graph:6,manag:3,mappingproxi:0,matter:[1,8],method:[1,8,12],modifi:0,modul:11,module_op:[0,11],mongocli:0,mongodb:[6,9,10],more:12,move:[6,9,12],must:10,name:[0,1,3,5,6,8,12],nameerror:6,necessari:9,need:[0,6,9,12],nest:6,never:[1,8],new_posit:3,none:[0,3,12],now:6,number:6,object:[0,2,3,7],object_id:3,objectid:[3,5],occupi:6,occupied_posit:5,one:[3,6,10],onli:[3,12],op_def:[0,11],oper:[3,5,6,9,12],operation_loc:5,option:3,other:3,our:9,packag:[9,11],page:9,pair:6,paramet:[0,1,3,6,8],path:[0,3,6,8],place:[6,9],platform:9,pleas:12,pop:9,port:12,posit:[1,3,6,8,9,12],possibl:3,procedur:0,program:[1,8,12],project:9,properti:[0,1,5,8,12],provid:[1,3,8,9],purpos:3,put:3,pymongo:9,python:[9,10],queri:[3,6],query_sampl:3,query_task:3,queue:3,rais:[3,6],read:9,reader:12,readi:9,recip:9,record:9,refer:[3,10,12],regard:3,regist:1,registri:1,relat:3,remot:10,remov:[3,6],repo:12,repositori:9,repres:9,requir:[3,9],restrict:3,robot:9,run:[2,3,5,7,9],sampl:[1,3,5,6,8,9,12],sample_batch:3,sample_id:[3,5],sample_posit:[1,3,6,8,11,12],sample_view:[0,11],sampleposit:[0,1,6,12],samplepositionpair:[0,5],sampleview:3,schedul:[0,11],script:[0,11],search:9,self:12,send:9,sent:9,sequenc:9,set:[1,3,6,8],set_idl:3,set_run:3,set_statu:3,setup:10,setup_from_device_def:6,setup_from_task_def:6,setup_lab:[0,11],sharabl:9,share:9,should:[1,3,5,6,8,12],similar:12,simpl:12,sinc:9,singl:3,single_sampl:3,skip:6,some:[5,6,9],sourc:[0,1,2,3,5,6,7,8],specifi:[6,8],src:[0,3],stage:3,start:3,statu:[3,6],still:[9,12],stop:[3,9],store:[0,3,6],str:[0,1,3,5,6,8,12],submit:9,submodul:11,subpackag:11,successfulli:[1,8],support:[3,6],synthesi:9,system:[6,9],task:[3,5,6,8],task_arg:0,task_dir:6,task_id:[3,5],task_manag:[0,6,11],task_nam:3,task_view:[0,11],taskmanag:7,taskview:3,tell:6,temporari:12,test:3,them:[1,6,8],thi:[1,3,5,9,10,12],thing:6,three:9,throughout:9,todo:12,track:9,transfer:12,tupl:5,tutori:12,two:[6,9],type:[0,1,3,5,6,8],typeerror:3,typing_op:[0,11],under:[9,12],union:3,uniqu:[1,6],unknown:[3,6],updat:[3,9],update_sample_posit:3,update_task:3,use:[1,8,9],used:[0,1,8],user:[6,9],util:[0,11],valid:3,valu:[3,9],vertex:9,via:9,view:[3,6,9],wait:9,want:3,websit:9,well:[3,8],what:9,when:[6,9],where:[6,9,12],which:[0,1,3,6,8,9],whose:6,workflow:9,wrapper:0,write:6,you:[1,8,10,12]},titles:["alab_management package","alab_management.device_def package","alab_management.executor package","alab_management.lab_status package","alab_management.logger package","alab_management.op_def package","alab_management.scripts package","alab_management.task_manager package","alab_management.utils package","Overview","Installation","alab_management","Quick Start"],titleterms:{For:10,alab_manag:[0,1,2,3,4,5,6,7,8,11],base_devic:1,base_oper:5,cleanup_lab:6,compil:[7,9],config:0,content:[0,1,2,3,4,5,6,7,8],data:9,defin:12,definit:9,develop:10,devic:12,device_def:1,device_view:3,executor:[2,9],fake_devic:8,indic:9,instal:10,lab:9,lab_statu:3,launch:6,logger:4,manag:9,modul:[0,1,2,3,4,5,6,7,8,9],module_op:8,op_def:5,overview:9,packag:[0,1,2,3,4,5,6,7,8],prerequisit:10,purpos:10,quick:12,reader:9,sample_posit:0,sample_view:3,schedul:[2,9],script:[6,9],setup_lab:6,start:12,statu:9,storag:9,submodul:[0,1,2,3,5,6,7,8],subpackag:0,tabl:9,task:[9,12],task_manag:7,task_view:3,typing_op:8,util:8}})