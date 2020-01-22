data "docker_registry_image" "yolo" {
  name = "waqasali/fyp-yolo"
}

resource "docker_image" "yolo" {
  name          = data.docker_registry_image.yolo.name
  pull_triggers = [data.docker_registry_image.yolo.sha256_digest]
}

resource "docker_container" "yolo" {
  image = docker_image.yolo.latest
  name  = "yolo-service"

  ports {
    internal = 50051
    external = 50052
  }
}
