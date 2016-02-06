//creates a new Router
var todosRouter = express.Router();

//would trigger on todos not / 
todosRouter.get('/',function(req,res){
	res.json(todos);
});
//This handles all of the CRUD requests to /todos 
app.use('/todos', todosRouter);

