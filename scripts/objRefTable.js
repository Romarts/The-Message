const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.Sprite,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.Sin,
		C3.Behaviors.destroy,
		C3.Plugins.TiledBg,
		C3.Behaviors.Pin,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.ScriptsInEvents.Acontecimento_jogo_Event1_Act1,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Sin.Exps.CyclePosition,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Behaviors.Platform.Acts.SetDoubleJumpEnabled,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Behaviors.Pin.Acts.PinByImagePoint,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Touch.Cnds.OnTapGestureObject
	];
};
self.C3_JsPropNameTable = [
	{Toque: 0},
	{Fundo: 0},
	{Sólido: 0},
	{Mosaico: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{Jogador: 0},
	{chave: 0},
	{Senóide: 0},
	{DestruirForaDoLayout: 0},
	{Inimigo: 0},
	{Arvore: 0},
	{Placa: 0},
	{Arbusto: 0},
	{Lapide: 0},
	{Esqueletos2: 0},
	{Esqueletos3: 0},
	{Esqueletos1: 0},
	{PlantaMorta: 0},
	{Caixinha: 0},
	{Fixar: 0},
	{Jogador_Animacao: 0},
	{Teclado: 0},
	{Tela_Menu: 0},
	{BotaoMenu: 0},
	{TelaDeVitoria: 0},
	{Castelo: 0},
	{Parede: 0},
	{IrParaCastelo: 0},
	{NinjaMulher: 0},
	{JackAbobora: 0},
	{FundoCastelo: 0},
	{ChaoCastelo: 0},
	{ChaoCastelaoConcertado: 0},
	{Infinito: 0},
	{Âncora: 0},
	{Texto: 0},
	{BotaoLadoEsq: 0},
	{BotaoPulo: 0},
	{BotaoLadoDir: 0},
	{Botão: 0},
	{Áudio: 0},
	{gerachave: 0},
	{chaves: 0}
];

self.InstanceType = {
	Toque: class extends self.IInstance {},
	Fundo: class extends self.ISpriteInstance {},
	Mosaico: class extends self.ITilemapInstance {},
	Jogador: class extends self.ISpriteInstance {},
	chave: class extends self.ISpriteInstance {},
	Inimigo: class extends self.ISpriteInstance {},
	Arvore: class extends self.ISpriteInstance {},
	Placa: class extends self.ISpriteInstance {},
	Arbusto: class extends self.ITiledBackgroundInstance {},
	Lapide: class extends self.ISpriteInstance {},
	Esqueletos2: class extends self.ISpriteInstance {},
	Esqueletos3: class extends self.ISpriteInstance {},
	Esqueletos1: class extends self.ISpriteInstance {},
	PlantaMorta: class extends self.ISpriteInstance {},
	Caixinha: class extends self.ISpriteInstance {},
	Jogador_Animacao: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Tela_Menu: class extends self.ISpriteInstance {},
	BotaoMenu: class extends self.ISpriteInstance {},
	TelaDeVitoria: class extends self.ISpriteInstance {},
	Castelo: class extends self.ISpriteInstance {},
	Parede: class extends self.ISpriteInstance {},
	IrParaCastelo: class extends self.ISpriteInstance {},
	NinjaMulher: class extends self.ISpriteInstance {},
	JackAbobora: class extends self.ISpriteInstance {},
	FundoCastelo: class extends self.ISpriteInstance {},
	ChaoCastelo: class extends self.ISpriteInstance {},
	ChaoCastelaoConcertado: class extends self.ISpriteInstance {},
	Infinito: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	BotaoLadoEsq: class extends self.ISpriteInstance {},
	BotaoPulo: class extends self.ISpriteInstance {},
	BotaoLadoDir: class extends self.ISpriteInstance {},
	Botão: class extends self.IButtonInstance {},
	Áudio: class extends self.IInstance {}
}