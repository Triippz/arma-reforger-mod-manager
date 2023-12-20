interface GamePropertyMissionHeader {
  m_iPlayerCount: number;
  m_eEditableGameFlags: number;
  m_eDefaultGameFlags: number;
  other: string;
}

interface GameProperties {
  serverMaxViewDistance: number;
  serverMinGrassDistance: number;
  networkViewDistance: number;
  disableThirdPerson: boolean;
  fastValidation: boolean;
  battlEye: boolean;
  missionHeader: GamePropertyMissionHeader;
}

interface Mod {
  modId: string;
  name: string;
  version: string;
}

interface Game {
  name: string;
  password: string;
  scenarioId: string;
  maxPlayers: number;
  visible: boolean;
  gameProperties: GameProperties;
  supportedPlatforms: string[];
  passwordAdmin: string;
  autoJoinable: boolean;
  mods: Mod[];
}

interface ServerConfig {
  dedicatedServerId: string;
  region: string;
  bindPort: number;
  publicPort: number;
  game: Game;
}


export {
  ServerConfig,
  Game,
  GameProperties,
  Mod,
  GamePropertyMissionHeader
}
