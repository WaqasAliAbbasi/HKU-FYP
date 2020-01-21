data "docker_registry_image" "registry_image" {
  name = var.docker_image
}

resource "docker_image" "image" {
  name          = data.docker_registry_image.registry_image.name
  pull_triggers = [data.docker_registry_image.registry_image.sha256_digest]
}

resource "docker_container" "stock" {
  image = docker_image.image.latest
  name  = "stock-service"

  ports {
    internal = 50051
    external = 50051
  }
}
