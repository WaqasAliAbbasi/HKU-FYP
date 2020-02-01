data "docker_registry_image" "resnet" {
  name = "codait/max-resnet-50"
}

resource "docker_image" "resnet" {
  name          = data.docker_registry_image.resnet.name
  pull_triggers = [data.docker_registry_image.resnet.sha256_digest]
}

resource "docker_container" "resnet" {
  image = docker_image.resnet.latest
  name  = "resnet-service"

  ports {
    internal = 5000
    external = 50053
  }
}
