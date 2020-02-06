data "docker_registry_image" "alpr" {
  name = "waqasali/fyp-alpr"
}

resource "docker_image" "alpr" {
  name          = data.docker_registry_image.alpr.name
  pull_triggers = [data.docker_registry_image.alpr.sha256_digest]
}

resource "docker_container" "alpr" {
  image = docker_image.alpr.latest
  name  = "alpr-service"

  ports {
    internal = 50051
    external = var.alpr1_port
  }
}
