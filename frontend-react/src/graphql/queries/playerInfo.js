import { gql } from 'apollo-boost'

export const playerInfo = gql`
query playerInfo($uid: String, $twitter: String) {
  playerInfo(uid: $uid, twitter: $twitter) {
    player {
      name
      weapons
      alias
      twitter
      discord_id
      topTotalScore
      topShooterScore
      topBlasterScore
      topRollerScore
      topChargerScore
      topSlosherScore
      topSplatlingScore
      topDualiesScore
      topBrellaScore
    }
    placements {
      id
      name
      weapon
      rank
      mode
      x_power
      month
      year
    }
  }
}
`