data "docker_registry_image" "alpr" {
  name = "openalpr/openalpr"
}

resource "docker_image" "alpr" {
  name          = data.docker_registry_image.alpr.name
  pull_triggers = [data.docker_registry_image.alpr.sha256_digest]
}