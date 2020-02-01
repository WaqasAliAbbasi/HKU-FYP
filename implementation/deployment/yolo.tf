data "docker_registry_image" "yolo" {
  name = "waqasali/fyp-yolo"
}

resource "null_resource" "yolo" {
  triggers = {
    digest = data.docker_registry_image.yolo.sha256_digest
  }

  connection {
    user        = "waqas"
    type        = "ssh"
    private_key = file("~/.ssh/id_rsa")
    timeout     = "2m"
    host        = "202.45.128.184"
  }

  provisioner "remote-exec" {
    inline = [
      "docker rm -f yolo-service 2> /dev/null",
      "docker pull waqasali/fyp-yolo",
      "docker run --name yolo-service -p 50052:50051 --gpus all -d waqasali/fyp-yolo"
    ]
  }

  lifecycle {
    create_before_destroy = true
  }
}
