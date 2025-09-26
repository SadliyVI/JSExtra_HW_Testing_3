export function getHealthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  }
  if (character.health >= 15 && character.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
