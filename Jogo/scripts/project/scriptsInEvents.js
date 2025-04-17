

const scriptsInEvents = {

	async Acontecimento_jogo_Event1_Act1(runtime, localVars)
	{
		var tela = window.innerWidth;
		if(tela > 900){
			runtime.getLayout("Jogo").getLayer("UI").isVisible = false;
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
