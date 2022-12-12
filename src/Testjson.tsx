export const Testjson_2 = [
    {name:"satou"}
]

interface item {
    smalltask_id: string
      smalltask: string
      task_id:string
  }

//   interface smalltask {
// 	  string
//   }
  
  interface Array {
    task_id:string
    task:string
	motivate:string
    created_at:string
    smalltask:string[]
  }


export const Testjson:Array[] = [
	{
		"task_id": "iu0f4ab2-ee0a-474f-919a-540fb3de16df",
		"task": "甘いもの食べる",
		"motivate":"",
		"created_at": "2022-11-21",
		"smalltask": ["コンビニに買いに行く","好きそうなものを選ぶ","レジにいく"]
	},
    {
		"task_id": "be0f4ab2-ee0a-474f-919a-540fb3de16df",
		"task": "甘いもの食べる",
		"motivate":"",
		"created_at": "2022-11-21",
		"smalltask": ["コンビニに買いに行く",]}
]

const Testjson_copy:any = [
	{
		"task_id": "iu0f4ab2-ee0a-474f-919a-540fb3de16df",
		"task": "甘いもの食べる",
		"motivate":"",
		"created_at": "2022-11-21",
		"smalltask": [
			{
				"smalltask_id": "cafce535-5e99-444a-adff-48e9a441b28c",
				"smalltask": "コンビニに買いに行く",
				"task_id": "be0f4ab2-ee0a-474f-919a-540fb3de16df"
			},
			{
				"smalltask_id": "be451694-3bc5-4139-8a8b-51778b7e51d1",
				"smalltask": "好きそうなものを選ぶ",
				"task_id": "be0f4ab2-ee0a-474f-919a-540fb3de16df"
			},
			{
				"smalltask_id": "876b4841-6102-462f-9e70-2fc217b27a4c",
				"smalltask": "レジにいく",
				"task_id": "be0f4ab2-ee0a-474f-919a-540fb3de16df"
			},
		]
	},
    {
		"task_id": "be0f4ab2-ee0a-474f-919a-540fb3de16df",
		"task": "甘いもの食べる",
		"motivate":"",
		"created_at": "2022-11-21",
		"smalltask": [
			{
				"smalltask_id": "cafce535-5e99-444a-adff-48e9a441b28c",
				"smalltask": "コンビニに買いに行く",
				"task_id": "be0f4ab2-ee0a-474f-919a-540fb3de16df"
			}]}
]