FROM openjdk:11
ADD target/ha2-backend.jar ha2-backend.jar
EXPOSE 8086
ENTRYPOINT ["java", "-jar", "ha2-backend.jar"]